import { FORM_UPDATE } from "../actions/form";

const initialState = {
    isGoing: true,
    numberOfGuests: 2
};

export default function (state: any = initialState, action: any) {
    switch (action.type) {
        case FORM_UPDATE: {
            const { prop, value } = action;
            return {
                ...state,
                [prop]: value
            };
        }
        default:
            return state;
    }
}