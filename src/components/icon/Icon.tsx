import React from 'react';
import iconSprite from '../../images/sprite.svg'


type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <div>
            <svg width={props.width || '50px'} height={props.height || '50px'} viewBox={props.viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
            </svg>
        </div>
    );
};
