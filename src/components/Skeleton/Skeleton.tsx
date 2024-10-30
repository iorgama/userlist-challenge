import { FC } from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonView: FC = () => {
  return <Skeleton borderRadius={8} count={4} height={20} enableAnimation highlightColor="#c0c0c0" style={{
    margin: '10px 0px'
  }} />
};

export default SkeletonView;
