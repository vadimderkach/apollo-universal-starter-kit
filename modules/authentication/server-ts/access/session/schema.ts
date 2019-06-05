import gql from 'graphql-tag';

export default gql`
  extend type Mutation {
    # Logout user
    logout: String
    logoutFromAllDevices: String
  }

  extend type Subscription {
    subscriptionLogoutFromAllDevices: String
  }
`;
