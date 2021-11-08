import { useState } from "react";

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(value) {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    }

    function setTrue() {
        setValue(true);
    }

    function setFalse() {
        setValue(false);
    }

    function toggleValue(value) {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    }

    return [value, toggleValue, setTrue, setFalse];
}
