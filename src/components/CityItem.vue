<template>
    <div class="city">
        <div class="city__image">
            <img :src=city.photoUrl alt="city cover" />
        </div>
        <div class="city__info">
            <h2 class="city__name">{{ city.name }}</h2>
        </div>
        <div class="city__stats">
            <div class="city__stat">
                <div class="city__stat-value"> {{ city.temperature }} ºC</div>
            </div>
        </div>
    </div>
</template>
<script setup>

defineProps({
    city: {
        type: Object,
        required: true,
    },
});

</script>
<style scoped>
.city {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    max-width: 400px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}

.city.captured {
    background-color: #f0f0f0;
}

.city__image {
    width: 100%;
    max-width: 200px;
    height: 100%;
    max-height: 200px;
    margin-bottom: 1rem;
}

.city__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.city__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.city__name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #333;
    text-decoration: none;
}

.city__description {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.city__types {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.city__type {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
}

.city__type.fire {
    background-color: #f08030;
    color: #fff;
}

.city__type.water {
    background-color: #6890f0;
    color: #fff;
}

.city__type.grass {
    background-color: #78c850;
    color: #fff;
}

.city__type.electric {
    background-color: #f8d030;
    color: #fff;
}

.city__type.ice {
    background-color: #98d8d8;
    color: #fff;
}

.city__type.fighting {
    background-color: #c03028;
    color: #fff;
}

.city__type.poison {
    background-color: #a040a0;
    color: #fff;
}

.city__type.ground {
    background-color: #e0c068;
    color: #fff;
}

.city__type.flying {
    background-color: #a890f0;
    color: #fff;
}

.city__type.psychic {
    background-color: #f85888;
    color: #fff;
}

.city__type.bug {
    background-color: #a8b820;
    color: #fff;
}

.city__type.rock {
    background-color: #b8a038;
    color: #fff;
}

.city__type.ghost {
    background-color: #705898;
    color: #fff;
}

.city__type.dragon {
    background-color: #7038f8;
    color: #fff;
}

.city__type.dark {
    background-color: #705848;
    color: #fff;
}

.city__type.steel {
    background-color: #b8b8d0;
    color: #fff;
}

.city__type.fairy {
    background-color: #ee99ac;
    color: #fff;
}

.city__abilities {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.city__ability {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    background-color: #f8f8f8;
    color: #000;
}

.city__stats {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.city__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.city__stat-name {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
}

.city__stat-value {
    font-size: 1rem;
    font-weight: 700;
}

.delete-city {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
}

.delete-city img {
    width: 20px;
}
</style>