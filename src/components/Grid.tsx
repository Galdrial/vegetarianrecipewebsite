import img from '../assets/prova.jpg';
import Card from './Card';

function Grid () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1300px] mx-auto px-8 sm:px-20 pt-16 pb-24">
      <Card src={img} alt="React Logo" title="React" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  />
      <Card src={img} alt="React Logo" title="React" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  />
      <Card src={img} alt="React Logo" title="React" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  />
      <Card src={img} alt="React Logo" title="React" description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  />
    </div>
  );
}

export default Grid;