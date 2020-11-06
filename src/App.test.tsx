import React from "react";
import { waitFor } from "@testing-library/react";
import App from "./App";
import defaultParticipant from "./mocks/default-participant.json";
import { Render } from "./test-utils";
import { fetchParticipantById } from "./services/ExtraLife";

const defaultTestState = {
  state: {
    participant: {
      id: 111333,
    },
    team: {},
  },
};

// These are more or less smoke tests for CI. More comprehensive tests will be coming.
describe("renders app", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("without crashing", async () => {
    jest
      .spyOn(URLSearchParams.prototype, "get")
      .mockImplementation((name) => name);

    fetchMock.mockResponse(JSON.stringify(defaultParticipant));

    const { queryByTestId } = Render(<App />, defaultTestState);

    await waitFor(() => fetchMock.mock.calls.length > 0, { timeout: 3000 });

    expect(queryByTestId("logo")).toBeInTheDocument();
    expect(queryByTestId("progress")).toBeInTheDocument();
  });

  test("without crashing and donor drive unavailable", () => {
    fetchMock.mockRejectOnce(new Error("failed!"));

    const { queryByTestId } = Render(<App />, { state: {} });

    expect(queryByTestId("logo")).toBeInTheDocument();
    expect(queryByTestId("progress")).not.toBeInTheDocument();
  });

  // TODO: Smoke tests for orientation.
});
