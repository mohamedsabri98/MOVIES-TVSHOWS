import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { Mutation, useMutation } from "react-query";
import { mutationLogin } from "../api/mutation";
import { useNavigate } from "react-router-dom";

function Auth() {
  const Navigate = useNavigate();

  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handelLogin = async () => {
    await mutate();
    Navigate("/");
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome Login as a Guest
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" onClick={handelLogin}>
              Guest Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Auth;
