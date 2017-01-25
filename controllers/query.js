children:

id,
child_name,
list_id,
gift_id

gifts:
id,
gift_name,
gift_icon



SELECT * FROM children, gifts WHERE children.list_id=1 AND children.gift_id=2


OUTPUT
gifts.icon


models.Gift.findOne({
    include: [{
        model: Child,
        where: { id: Sequelize.col('gift.child_id') }
    }]
})