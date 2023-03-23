import avatar from '../../../assets/default-avatar.svg';

export function Person({ id, name, nickName = 'no nickname', images }) {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: 150 }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
}
