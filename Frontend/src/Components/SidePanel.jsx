import { Checkbox, Container, Divider, Heading, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import PriceSlider from "./PriceSlider";

const SidePanel = ({ price, setprice }) => {

  return (
    <div style={{ textAlign: "start" }}>
      <Heading size="md">Traveller Experience</Heading>
      <br />
      <Checkbox size="lg" isChecked>
        LGBTQ welcoming:
      </Checkbox>
      <Text paddingLeft={6} textAlign="start">
        See properties that pledge to make all guests feel safe, welcome, and
        respected.
      </Text>

      <Checkbox size="lg">Bussiness Frendly:</Checkbox>
      <Text paddingLeft={6} textAlign="start">
        See properties with amenities to help you work comfortably, like WiFi
        and breakfast.
      </Text>

      <Checkbox size="lg">Family Friendly:</Checkbox>
      <Text paddingLeft={6} textAlign="start">
        See properties that include family essentials like in-room conveniences
        and activities for the kids.
      </Text>
      <Divider orientation="horizontal" />
      <br />
      <Heading size="md">Price</Heading>
      <Container direction="row">
        <PriceSlider setprice={setprice} price={price} />
      </Container>
    </div>
  );
};

export default memo(SidePanel);
