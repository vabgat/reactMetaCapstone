import Card from './Card';
import './HighLights.css';

const Items = [
    {
        src: 'greek_salad.jpeg',
        title: 'Greek Salad',
        description: 'Greek Salad (Horiatiki) is a vibrant, sun-drenched medley of ripe tomatoes, crisp cucumbers, pungent red onions, and briny Kalamata olives.',
        price: '$12.99'
    },
    {
        src: 'bruschette.jpeg',
        title: 'Bruschetta',
        description: 'Bruschetta is a timeless Italian antipasto featuring thick slices of grilled sourdough or rustic bread rubbed with fresh garlic and drizzled with extra virgin olive oil.',
        price: '$5.99'
    },
    {
        src: 'lemon_dessert.jpeg',
        title: 'Lemon Dessert',
        description: 'A bright and zesty lemon dessert is the ultimate palate cleanser, offering a sharp, citrusy punch balanced by delicate sweetness.',
        price: '$12.99'
    }
];

const HighLights = () => {
    return (
        <section className='highlights-main'>
            <section className='highlights-title'>
                <h2>This week specials!</h2>
                <button>Online Menu</button>
            </section>
            <div className="highlights-item">
                {Items.map((item) => (
                    <Card
                        key={item.title}
                        src={item.src}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default HighLights;