import './title.scss';

export const SectionHeader = ({
  headerText,
  style
}: {
  headerText: string,
  style?: Object
}) =>{
  return <div
    className="section-header"
    style={style ? style : {}}>
    {headerText}
  </div>
}