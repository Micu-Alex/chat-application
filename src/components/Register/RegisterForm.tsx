import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
  StyledLink,
  Card,
} from "../../commonStyles/Form.styles";
import { registerUser } from "../../services/RegisterService";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <Title>Register</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(email, name, password, navigate);
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
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <Button type="submit">Register</Button>
          <Label>
            Already have an account? Log in{" "}
            <StyledLink to="/login">here</StyledLink>{" "}
          </Label>
        </Form>
      </Card>
    </Container>
  );
};
export default RegisterForm;
