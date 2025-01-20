import { buttonData } from '../data/buttonData.ts';
import ButtonCategoryView from './ButtonCategoryView.tsx';

export default function WholeButtonsView() {
  return (
    <div className="flex justify-center flex-col items-center">
      {buttonData().map((category, index) => {
        return (
          <ButtonCategoryView
            key={index}
            links={category.links}
            categoryName={category.title}
          />
        );
      })}
    </div>
  );
}
