// Generate a random 10-letter ID
function generateRandomId() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomId = '';
    for (let i = 0; i < 10; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}

// Import avatars
import avatarMarkWebber from './assets/images/avatar-mark-webber.webp';
import avatarAngelaGray from './assets/images/avatar-angela-gray.webp';
import avatarJacobThompson from './assets/images/avatar-jacob-thompson.webp';
import avatarRizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp';
import avatarKimberlySmith from './assets/images/avatar-kimberly-smith.webp';
import avatarNathanPeterson from './assets/images/avatar-nathan-peterson.webp';
import avatarAnnaKim from './assets/images/avatar-anna-kim.webp';

// Notification data array
const NotificationData = [
    {
        id: generateRandomId(),
        img: avatarMarkWebber,
        name: 'Mark Webber',
        activity: 'reacted to your recent post',
        message: 'My first tournament today!',
        notificationAge: '1m ago',
        isPrivateMessage: false,
        isUnread: true
    },
    {
        id: generateRandomId(),
        img: avatarAngelaGray,
        name: 'Angela Gray',
        activity: 'followed you',
        message: '',
        notificationAge: '5m ago',
        isPrivateMessage: false,
        isUnread: true
    },
    {
        id: generateRandomId(),
        img: avatarJacobThompson,
        name: 'Jacob Thompson',
        activity: 'has joined your group',
        message: 'Chess Club',
        notificationAge: '1 day ago',
        isPrivateMessage: false,
        isUnread: true
    },
    {
        id: generateRandomId(),
        img: avatarRizkyHasanuddin,
        name: 'Rizky Hasanuddin',
        activity: 'sent you a private message',
        message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        notificationAge: '5 days ago',
        isPrivateMessage: true,
        isUnread: false
    },
    {
        id: generateRandomId(),
        img: avatarKimberlySmith,
        name: 'Kimberly Smith',
        activity: 'commented on your picture',
        message: '',
        notificationAge: '1 week ago',
        isPrivateMessage: false,
        isUnread: false
    },
    {
        id: generateRandomId(),
        img: avatarNathanPeterson,
        name: 'Nathan Peterson',
        activity: 'reacted to your recent post',
        message: '5 end-game strategies to increase your win rate',
        notificationAge: '2 weeks ago',
        isPrivateMessage: false,
        isUnread: false
    },
    {
        id: generateRandomId(),
        img: avatarAnnaKim,
        name: 'Anna Kim',
        activity: 'left the group',
        message: 'Chess Club',
        notificationAge: '2 weeks ago',
        isPrivateMessage: false,
        isUnread: false
    }
];

export default NotificationData;
