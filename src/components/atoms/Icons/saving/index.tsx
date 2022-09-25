import React, { FC } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IconProps } from '../types';

const renderIcon = (color = 'white') => `
<svg width="20" height="20" viewBox="0 0 20 20" fill="${color}" xmlns="http://www.w3.org/2000/svg">
<path d="M8.081 1.42762C8.611 1.79362 9.118 2.03462 9.535 2.08762C9.30646 2.54111 9.14799 3.02663 9.065 3.52762C8.393 3.37862 7.754 3.02362 7.229 2.66162C6.97751 2.48734 6.73424 2.30147 6.5 2.10462V4.33862C6.49985 4.48811 6.45502 4.63415 6.37127 4.75799C6.28753 4.88182 6.16869 4.97781 6.03 5.03362L6.024 5.03662C5.96779 5.05928 5.91242 5.08396 5.858 5.11062C5.741 5.16562 5.571 5.25062 5.372 5.36462C4.8829 5.6395 4.43176 5.97701 4.03 6.36862C3.577 6.82162 3.297 7.43162 3.14 7.90462C2.937 8.51062 2.421 9.06962 1.687 9.19262C1.63489 9.20135 1.58754 9.22821 1.55332 9.26847C1.5191 9.30873 1.50022 9.35979 1.5 9.41262V11.1666C1.5 11.3316 1.62 11.4726 1.783 11.4996C2.407 11.6036 2.898 12.0116 3.175 12.5056C3.54312 13.1648 3.99894 13.771 4.53 14.3076C4.98652 14.7528 5.5247 15.1056 6.115 15.3466C6.36607 15.4511 6.62484 15.536 6.889 15.6006L6.894 15.6026C7.06468 15.636 7.21845 15.7277 7.32899 15.8619C7.43954 15.9962 7.49999 16.1647 7.5 16.3386V17.5886C7.5 17.7266 7.612 17.8386 7.75 17.8386H9C9 17.4408 9.15804 17.0593 9.43934 16.778C9.72064 16.4967 10.1022 16.3386 10.5 16.3386H12.5C12.8978 16.3386 13.2794 16.4967 13.5607 16.778C13.842 17.0593 14 17.4408 14 17.8386H15.25C15.3163 17.8386 15.3799 17.8123 15.4268 17.7654C15.4737 17.7185 15.5 17.6549 15.5 17.5886V15.3386C15.5 15.0556 15.66 14.7966 15.912 14.6686L15.925 14.6616C16.047 14.5921 16.1652 14.516 16.279 14.4336C16.522 14.2576 16.851 13.9846 17.181 13.5996C17.833 12.8396 18.5 11.6326 18.5 9.83862C18.5 8.83162 18.312 8.01862 17.991 7.35062C18.3481 6.87659 18.6182 6.34299 18.789 5.77462C18.889 5.91062 18.983 6.05162 19.071 6.19762C19.675 7.19662 20 8.40162 20 9.83762C20 12.0446 19.167 13.5876 18.32 14.5766C17.9339 15.027 17.4901 15.4244 17 15.7586V17.5876C17.0001 17.8175 16.955 18.0452 16.8671 18.2576C16.7792 18.4701 16.6503 18.6631 16.4878 18.8257C16.3253 18.9883 16.1323 19.1173 15.9199 19.2053C15.7075 19.2933 15.4799 19.3386 15.25 19.3386H14C13.6022 19.3386 13.2206 19.1806 12.9393 18.8993C12.658 18.618 12.5 18.2364 12.5 17.8386H10.5C10.5 18.2364 10.342 18.618 10.0607 18.8993C9.77936 19.1806 9.39782 19.3386 9 19.3386H7.75C7.28587 19.3386 6.84075 19.1542 6.51256 18.8261C6.18437 18.4979 6 18.0527 6 17.5886V16.9056C5.84331 16.8528 5.68855 16.7944 5.536 16.7306C4.76597 16.4141 4.06442 15.9516 3.47 15.3686C2.84096 14.7343 2.30102 14.0174 1.865 13.2376C1.83259 13.173 1.78628 13.1164 1.7294 13.0718C1.67252 13.0272 1.60647 12.9957 1.536 12.9796C1.1068 12.9081 0.71689 12.6867 0.43563 12.3547C0.15437 12.0227 4.63533e-06 11.6017 0 11.1666V9.41362C0 8.57062 0.61 7.85162 1.44 7.71362C1.527 7.69862 1.656 7.61162 1.717 7.42962C1.909 6.85262 2.282 5.99562 2.97 5.30762C3.46584 4.82162 4.02326 4.40271 4.628 4.06162C4.764 3.98362 4.89 3.91662 5 3.86162V1.00862C5 0.07062 6.13 -0.31438 6.74 0.29262C7.07 0.62162 7.55 1.05962 8.081 1.42662V1.42762ZM11.07 6.18662C10.58 5.98362 10.166 5.59762 10.068 5.07662C9.88976 4.10592 10.0765 3.1036 10.5923 2.2622C11.1081 1.4208 11.9167 0.799675 12.8626 0.518144C13.8085 0.236613 14.8251 0.314535 15.7171 0.736939C16.609 1.15934 17.3134 1.89644 17.695 2.80662C18.0467 3.65481 18.0959 4.59814 17.8344 5.47833C17.573 6.35851 17.0167 7.12198 16.259 7.64062C15.821 7.93962 15.256 7.91962 14.766 7.71662L11.07 6.18662V6.18662ZM15.464 6.36662C15.9579 6.00654 16.3029 5.47812 16.4339 4.88109C16.5649 4.28406 16.4728 3.65972 16.1751 3.12593C15.8773 2.59214 15.3944 2.18582 14.8176 1.98367C14.2407 1.78151 13.6099 1.7975 13.044 2.02862C12.524 2.24401 12.0917 2.62846 11.8172 3.11985C11.5426 3.61124 11.4418 4.18085 11.531 4.73662L11.552 4.75262C11.581 4.77156 11.6119 4.78763 11.644 4.80062L15.34 6.33062C15.3798 6.34721 15.4214 6.35896 15.464 6.36562V6.36662ZM7 7.33862C7 7.60384 6.89464 7.85819 6.70711 8.04573C6.51957 8.23326 6.26522 8.33862 6 8.33862C5.73478 8.33862 5.48043 8.23326 5.29289 8.04573C5.10536 7.85819 5 7.60384 5 7.33862C5 7.0734 5.10536 6.81905 5.29289 6.63151C5.48043 6.44398 5.73478 6.33862 6 6.33862C6.26522 6.33862 6.51957 6.44398 6.70711 6.63151C6.89464 6.81905 7 7.0734 7 7.33862V7.33862Z" fill="black"/>
</svg>

`;

export const SavingIcon: FC<IconProps> = ({ size }) => {
  return (
    <View style={{ width: size, height: size }}>
      <SvgXml xml={renderIcon()} width="100%" height="100%" />
    </View>
  );
};

export default SavingIcon;