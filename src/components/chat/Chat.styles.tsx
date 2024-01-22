import styled from "styled-components";

export const ChatContainer = styled.div`
  padding: 10px;
  background-color: #f3f1e0;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ChatTitle = styled.h2`
  text-align: left;
  color: #333;
  padding: 10px 0 10px 10px;
  margin: 0;
  position: sticky;
  top: 0;
  background-color: #dbd9ca;
  z-index: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #dbd9ca;
  padding: 10px;
  position: sticky;
  bottom: 0;
`;

interface MessageContainerProps {
  $bgColor?: string;
  $isCurrentUser?: boolean;
}
export const MessageWrapper = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  justify-content: ${(props) =>
    props.$isCurrentUser ? "flex-end" : "flex-start"};
`;
export const MessageBubble = styled.div<MessageContainerProps>`
  border-radius: 8px;
  background-color: ${(props) => props.$bgColor || "white"};
  padding: 10px;
  max-width: 70%;
  word-wrap: break-word;
  word-break: break-word;
  margin-inline-start: 50px;
  margin-inline-end: 50px;
  align-self: ${(props) => (props.$isCurrentUser ? "flex-end" : "flex-start")};
`;

export const MessageText = styled.p`
  padding: 0 5px;
  margin-bottom: 0px;
  margin-top: 3px;
  max-width: 100%;
`;

interface ImgContinerProps {
  $enlarged?: boolean;
}
export const ImgContiner = styled.div<ImgContinerProps>`
  max-width: ${(props) => (props.$enlarged ? "100%" : "540px")};
  max-height: 100%;
  overflow: hidden;
  cursor: ${(props) => (props.$enlarged ? "zoom-out" : "zoom-in")};

  img {
    width: ${(props) => (props.$enlarged ? "100%" : "540px")};
    height: auto;
    transition: max-width 0.6s ease-in-out;
    cursor: inherit;
  }
`;
