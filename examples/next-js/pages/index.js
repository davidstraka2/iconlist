import vbmA from '../tmp/icons/groupA.vbm.json';
import vbmB from '../tmp/icons/groupB.vbm.json';

const vbm = {
    groupA: vbmA,
    groupB: vbmB,
};

const Icon = ({color, groupName, iconId}) => {
    const viewBox = vbm[groupName][iconId];
    return (
        <svg style={{fill: color}} viewBox={ viewBox } role="img">
            <use href={`/static/icons/${ groupName }.svg#${ iconId }`} />
        </svg>
    );
};

const GroupAIcon = ({iconId}) => (
    <Icon color="pink" groupName="groupA" iconId={ iconId } />
);

const GroupBIcon = ({iconId}) => (
    <Icon color="blue" groupName="groupB" iconId={ iconId } />
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
            <GroupAIcon iconId="bell" />
            <GroupAIcon iconId="clock" />
            <GroupAIcon iconId="hourglass" />
            <GroupAIcon iconId="bookmark" />
        </section>
        <section>
            <GroupBIcon iconId="grin" />
            <GroupBIcon iconId="laugh" />
            <GroupBIcon iconId="heart" />
        </section>
    </main>
);
