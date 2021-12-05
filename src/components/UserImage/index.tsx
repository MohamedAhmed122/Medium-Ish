import React from 'react';
import {Nullable} from '@Types/Common';
import {Image, ImageProps} from 'react-native';
import {SvgUri} from 'react-native-svg';

interface Props extends Omit<ImageProps, 'source'> {
  imageUrl: Nullable<string>;
  image: {
    url: Nullable<string>;
  };
}

export const UserImage: React.FC<Props> = ({imageUrl, image, ...props}) => {
  return (
    <>
      {imageUrl ? (
        <SvgUri uri={imageUrl} {...props} />
      ) : (
        image?.url && (
          <Image source={{uri: image?.url}} resizeMode="cover" {...props} />
        )
      )}
    </>
  );
};
