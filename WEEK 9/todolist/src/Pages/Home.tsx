import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
`;

interface BlockProps {
  focused?: boolean;
}

const Block = styled.div<BlockProps>`
  max-width: 850px;
  width: 100%;
  height: 75px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 15px 0px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.focused
      ? "0px 12px 48px 5px rgba(0, 0, 0, 0.2)"
      : "0px 8px 32px -5px rgba(0, 0, 0, 0.25)"};
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  transform: scale(${(props) => (props.focused ? 1.05 : 1)});
`;

const SubmitContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Input = styled.input.attrs({
  type: "text",
  required: true,
  placeholder: "투두를 입력하세요",
})`
  all: unset;
  padding: 12px 15px;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
`;

const SubmitButton = styled.input.attrs({ type: "submit", value: "+" })`
  all: unset;
  padding: 12px 16px;
  background-color: #3376d0;
  border-radius: 5px;
  color: #fafafa;
  margin-left: 20px;
`;

const TodoText = styled.p`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Time = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const Home: React.FC = () => {
  interface TodoProps {
    text: string;
    createdAt: string;
  }

  const [text, setText] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const time = new Date();

    setTodos([
      {
        text,
        createdAt: `${time.getHours()} 시 ${time.getMinutes()} 분 ${time.getSeconds()} 초`,
      },
      ...todos,
    ]);
    setText("");
    inputRef.current?.blur();
  };

  return (
    <Wrapper>
      <TopBar />

      <Block focused={focus}>
        <SubmitContainer onSubmit={onSubmit}>
          <Input
            ref={inputRef}
            onChange={onChange}
            value={text}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <SubmitButton />
        </SubmitContainer>
      </Block>
      {todos.map((todo) => (
        <Block>
          <TodoText>{todo.text}</TodoText>
          <Time>{todo.createdAt}</Time>
        </Block>
      ))}
    </Wrapper>
  );
};

export default Home;
