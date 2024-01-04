import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NavBarState {
    option: string | null
}
const initialState: NavBarState = {
    option: null,
}

export const NavBarSlice = createSlice({
    name: "navBar",
    initialState,
    reducers: {
        setOption: (state, action: PayloadAction<string>) => {
            state.option = action.payload
        },
    },
})

export const { setOption } = NavBarSlice.actions
export default NavBarSlice.reducer