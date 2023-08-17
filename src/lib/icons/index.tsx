import svg from './true.svg';

export type EvpIconProps = {
  name: string;
}

const Icon = (props: EvpIconProps) => {
  return (
    <img alt={`evp-icon_${props.name}`} src={svg}></img>
  );
};

export default Icon;
