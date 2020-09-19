import React from "react";

interface Props {
  name: string;
}

const IndexPage: React.FC<Props> = () => (
  <div data-testid="Here">
    <h1>Akram's CV</h1>
  </div>
);

export default IndexPage;
