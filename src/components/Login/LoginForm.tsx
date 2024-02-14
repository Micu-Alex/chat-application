import { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  StyledLink,
  Title,
} from "./Login.styles";
import { loginUser } from "../../services/LoginService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser(email, password, navigate);
          }}
        >
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
          <Label>
            Don't have an account? Sign up{" "}
            <StyledLink to="/register">here</StyledLink>{" "}
          </Label>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginForm;
