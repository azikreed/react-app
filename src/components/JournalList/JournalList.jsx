import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList({items}) {
	if(items.length === 0) {
		return <p>Записей пока нет, добавьте первую!</p>;
	}
	
	const sortItems = (a, b) => {
		if(a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	return <>{items.sort(sortItems).map(({title, text, date, id}) => (
		<CardButton key={id}>	
			<JournalItem
				title={title}
				text={text}
				date={date}
			/>
		</CardButton>
	))}</>;
}

export default JournalList;
