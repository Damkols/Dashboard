import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Deposits from "./Deposits/Deposits";
import NewDepositsBtn from "./NewDepositsBtn";

import depositData from "../../DepositData.json";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
      <NewDepositsBtn />
      <Deposits title="Active Deposits" count={2} data={depositData.active} />
      <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
    </Container>
  );
};

export default Main;
