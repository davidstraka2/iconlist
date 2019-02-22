import vbmA from '../static/icons/groupA.vbm.json';
import vbmB from '../static/icons/groupB.vbm.json';

const vbm = {
    groupA: vbmA,
    groupB: vbmB,
};

const Icon = ({color, groupName, iconId}) => {
    const viewBox = vbm[groupName][iconId];
    return (
        <svg style={{fill: color}} viewBox={ viewBox } role="img">
            <use href={`/static/icons/${ groupName }.svg#${ iconId }`}></use>
        </svg>
    );
};

const GroupAIcon = ({iconId}) => (
    <Icon color="pink" groupName="groupA" iconId={ iconId }></Icon>
);

const GroupBIcon = ({iconId}) => (
    <Icon color="blue" groupName="groupB" iconId={ iconId }></Icon>
);

export default () => (
    <main>
        <style>{`
            svg {
                width: 100px;
                height: 100px;
            }
        `}</style>
        <section>
            <GroupAIcon iconId="bell"></GroupAIcon>
            <GroupAIcon iconId="clock"></GroupAIcon>
            <GroupAIcon iconId="hourglass"></GroupAIcon>
            <GroupAIcon iconId="bookmark"></GroupAIcon>
        </section>
        <section>
            <GroupBIcon iconId="grin"></GroupBIcon>
            <GroupBIcon iconId="laugh"></GroupBIcon>
            <GroupBIcon iconId="heart"></GroupBIcon>
        </section>
    </main>
);
