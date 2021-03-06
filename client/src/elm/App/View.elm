module App.View exposing (..)

import App.Model exposing (..)
import App.Types exposing (Page(..))
import Html exposing (..)
import Html.Attributes exposing (class)
import Pages.Homepage.View
import Pages.Item.View exposing (view)


view : Model -> Html Msg
view model =
    case model.activePage of
        HomePage ->
            div [ class "ui container" ]
                [ Pages.Homepage.View.view model.backendUrl model.user model.backend.items
                ]

        Item itemId ->
            div [ class "ui container" ]
                -- @todo: Send model.backend instead of model.backend.items
                [ Html.map MsgPagesItem <| Pages.Item.View.view model.backendUrl model.user model.backend.items itemId model.pagesItem
                ]

        NotFound ->
            div [] [ text "Wrong page defined" ]
