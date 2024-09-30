import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
<<<<<<< HEAD
import AccountItem from '../AccountItem';
=======
import AccountItem from './AccountItem';
>>>>>>> 5f8e98bdfa207cea397fcfda9a62d03172b8640d

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
<<<<<<< HEAD
=======

>>>>>>> 5f8e98bdfa207cea397fcfda9a62d03172b8640d
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
