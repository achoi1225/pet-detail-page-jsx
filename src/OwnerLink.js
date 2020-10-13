import React from 'react';

const OwnerLink = owner =>
  <a href={owner.href}>
    {owner.lastName}, {owner.firstName}
  </a>
;

export default OwnerLink;