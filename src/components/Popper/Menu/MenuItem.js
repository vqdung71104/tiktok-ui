import Button from '~/components/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from '~/components/Popper/Menu/MenuItem';

const cx = classNames.bind(styles);

function MENU_ITEMS(data, onClick) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.object.func,
};

export default MENU_ITEMS;
