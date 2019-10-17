import React, { useEffect, useState, Fragment } from "react";
import Loader from "../../components/Loader";
import CustomersTable from "./_customersTable";
import SidebarModal from "./_sidebarModal";
import { connect } from "react-redux";
import { getCustomers } from "../../redux/actions/customer.actions";

const Customers = ({ getCustomers, customers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customer, setCustomer] = useState(undefined);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const getCustomer = id => {
    const selectedCustomer = customers.filter(cust => cust.id === id)[0];
    setCustomer(selectedCustomer);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCustomer(undefined);
  }

  let content = <Loader fullPage={true} />;

  if (customers) {
    content = (
      <Fragment>
        <CustomersTable getId={getCustomer} data={customers} />
        {customer && (
          <SidebarModal
            data={customer}
            visible={isOpen}
            onClose={closeModal}
          />
        )}
      </Fragment>
    );
  }

  return content;
};

const mapStateToProps = state => ({
  customers: state.customers.list
});

export default connect(mapStateToProps,{ getCustomers })(Customers)