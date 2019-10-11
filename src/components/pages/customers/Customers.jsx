import React, { useEffect } from "react";
import Loader from "../../commons/loader/Loader";
import CustomersTable from "./CustomersTable";

import { connect } from "react-redux";
import { getCustomers } from "../../../redux/actions/customer.actions";

const Customers = ({ getCustomers, customers }) => {
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  let content = <Loader fullPage={true} />;

  if (customers.length) {
    content = <CustomersTable data={customers} />;
  }

  return content;
};

const mapStateToProps = state => ({
  customers: state.customers.list
});

export default connect(
  mapStateToProps,
  { getCustomers }
)(Customers);
