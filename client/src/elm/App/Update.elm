port module App.Update
    exposing
        ( init
        , update
        , subscriptions
        )

import App.Model exposing (..)
import App.Types exposing (Widget(..))
import Homepage.Update


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        widget =
            case flags.widget of
                "homepage" ->
                    HomePage

                -- Fallback to page not found.
                _ ->
                    NotFound
    in
        ( { emptyModel | widget = widget }
        , Cmd.none
        )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        MsgPagesHomepage subMsg ->
            let
                ( val, cmds ) =
                    Homepage.Update.update subMsg model.pageHomepage
            in
                ( { model | pageHomepage = val }
                , Cmd.map MsgPagesHomepage cmds
                )


subscriptions : Model -> Sub Msg
subscriptions model =
    case model.widget of
        HomePage ->
            Sub.map MsgPagesHomepage <| Homepage.Update.subscriptions

        NotFound ->
            Sub.none
