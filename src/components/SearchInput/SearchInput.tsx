import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";

type BaseInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface SearchInputProps extends Omit<BaseInputProps, "onChange" | "ref"> {
    onChange: (value: string) => void;
    timeout?: number;
}

const StyledInputWrapper = styled.div<{writing?: boolean}>`
    &:after {
        content: url("${process.env.PUBLIC_URL}/writing16.svg");
        position: relative;
        left: calc(100% - 30px);
        top: -31px;
        z-index: 100;
        
        ${({writing}) => writing ? css`display: inline-block`: css`display: none`}
    }
    width: 60%;
    height: 35px;
    margin-bottom: 10px;
    margin-top: 5px;
`

const StyledInput = styled.input`
    width: calc(100% - 25px);
    height: inherit;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
    border-radius: 6px;
`

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
