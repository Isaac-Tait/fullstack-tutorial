import React from 'react';
import { RouteComponentProps } from '@reach/router';
import gql from 'graphql-tag'; 

import { Loading, Header, LaunchDetail } from '../components';
import { ActionButton } from '../containers';
import { RouteComponentProps } from '@reach/router';
import * as LaunchDetailsTypes from './__generated__/LaunchDetails';

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      id
      site
      isBooked
      rocket {
        id
        name
        type
      }
      mission {
        name
        missionPatch
      }
    }
  }
`;
interface LaunchProps extends RouteComponentProps {

}

const Launch: React.FC<LaunchProps> = () => {
  return <div />;
}

export default Launch;