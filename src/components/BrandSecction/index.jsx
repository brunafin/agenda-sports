import brandImg from '../../assets/images/img-brand.png';
import './styles.scss';

export function BrandSecction(){
  return(
    <div className="containerBrand">
      <h1>agendaSports</h1>
      <img src={brandImg} alt="foto da marca" title="foto da marca"/>
    </div>
  );
}