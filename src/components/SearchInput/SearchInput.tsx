import React, {useEffect, useState} from "react";
import {StyledInput, StyledInputWrapper} from "./Styled";

type BaseInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface SearchInputProps extends Omit<BaseInputProps, "onChange" | "ref"> {
    onChange: (value: string) => void;
    timeout?: number;
}

export const SearchInput = ({onChange, timeout = 500, ...props}: SearchInputProps) => {
    const [searchString, setSearchString] = useState<string>("");
    const [timer, setTimer] = useState<number | null>(null);

    useEffect(() => {
        if(searchString === null) {
            return;
        }

        if(timer !== null) {
            clearTimeout(timer);
        }

        setTimer(
            setTimeout(() => {
                onChange(searchString);
                setTimer(null);
            }, timeout)
        );
        // Because updating hasn't to happen whenever the timer value has changed
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchString, onChange, timeout]);

    return (
        <StyledInputWrapper writing={!!timer}>
            <StyledInput {...props}
                         onChange={event => setSearchString(event.target.value)}
                         value={searchString}
            />
        </StyledInputWrapper>
    )
}
