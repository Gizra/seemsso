module Backend.Update exposing (subscriptions, update)

import App.Types exposing (BackendUrl)
import Backend.Item.Update
import Backend.Model exposing (Model, Msg(..))
import User.Model exposing (CurrentUser)


update : BackendUrl -> CurrentUser -> Msg -> Model -> ( Model, Cmd Msg )
update backendUrl currentUser msg model =
    case msg of
        MsgItems subMsg ->
            let
                ( modelUpdated, subCmds ) =
                    Backend.Item.Update.update backendUrl currentUser subMsg model
            in
            ( modelUpdated
            , Cmd.map MsgItems subCmds
            )


subscriptions : CurrentUser -> Sub Msg
subscriptions currentUser =
    Sub.map MsgItems <| Backend.Item.Update.subscriptions currentUser
