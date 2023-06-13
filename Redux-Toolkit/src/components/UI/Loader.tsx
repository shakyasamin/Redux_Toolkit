import { FC } from 'react';

const Loader: FC = () => (
  <div className="flex justify-center">
    <div className="animate-spin rounded-full border-t-4 border-gray-900 h-8 w-8"></div>
  </div>
);

export default Loader;