import { useEffect } from "react";
import { usePathname } from "next/navigation"
import useNavigation from "@/common/Hooks/useNavigation";
import { setOption } from "@/common/Redux/Slices/navBarSlice";
import { useAppDispatch, useAppSelector } from "@/common/Redux/hooks";
import { OPTIONS } from "@/common/constants";

export default function useNavBar() {
    const selected = useAppSelector((state) => state.navBar.option);
    const path = usePathname();
    const { onNavigateToPath } = useNavigation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setOption(OPTIONS[path]));
    }, [])

    const onClickOption = (path: string) => {
        dispatch(setOption(OPTIONS[path]));
        onNavigateToPath(path);
    }

    return {
        selected,
        onClickOption
    }
}