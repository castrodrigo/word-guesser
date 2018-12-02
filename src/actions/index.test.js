import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { getSecretWord, actionTypes } from "./index";
import { dispatch } from "rxjs/internal/observable/pairs";

describe("Get Secret Word", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("Secret Word was fetched and added to state", async () => {
    const secret = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secret
      });
    });

    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secret).toBe(secret);
  });
});
