import ListCustomers from "./ListCustomers.vue";
import { mount, shallowMount } from "@vue/test-utils";

describe("List Customers", () => {
  it.todo("should return and array of messages");
  let wrapper = null;
  // beforeEach(async () => {
  //   wrapper = mount(ListCustomers, { propsData: {} });
  // });
  it("Should match the snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should have a list of customers", () => {
    const shallowWrapper = shallowMount(ListCustomers, {
      propsData: {
        messages: [{ content: "Customers" }],
      },
    });
    expect(shallowWrapper.findAll(".table-header")).toHaveLength(1);
  });
});
