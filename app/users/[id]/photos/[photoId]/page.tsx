import React from 'react';
interface Props {
  params: { id: number; photoId: number };
}
const UserDetailPagePhoto = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      User{id}
      photoId{photoId}
    </div>
  );
};

export default UserDetailPagePhoto;
