import React from 'react';
import PetDetailList from './PetDetailList';
import OwnersList from './OwnersList';

const PetDetails = props =>
  <>
    <PetDetailList pet={props.pet} />
    <OwnersList owners={props.pet.Owners} />
  </>
;

PetDetails.defaultProps = {
  pet: {
      name: "",
      age: "",
      PetType: { type: "" },
      Owners: []
    },
};

// OwnersList.defaultProps = {
//   pet: {
//     Owners: []
//   }
// }

export default PetDetails;
