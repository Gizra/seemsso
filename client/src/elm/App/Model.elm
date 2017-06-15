module App.Model
    exposing
        ( emptyModel
        , Flags
        , Msg(..)
        , Model
        )

import App.Types exposing (Language(..), Page(..))
import Homepage.Model exposing (Model, Msg)
import Event.Model exposing (Model, Msg)


type Msg
    = MsgPagesHomepage Homepage.Model.Msg


type alias Flags =
    { widget : String
    }


type alias Model =
    { widget : Widget
    , pageHomepage : Homepage.Model.Model
    }


emptyModel : Model
emptyModel =
    { widget = NotFound
    , pageHomepage = Homepage.Model.emptyModel
    }
