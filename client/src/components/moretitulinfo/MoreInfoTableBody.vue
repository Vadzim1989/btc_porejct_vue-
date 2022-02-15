<template>
    <tr :key="users.index">
        <td class="tdNum td-id">{{users.ab_code}}</td>
        <td class="tdNum">{{users.nphone}}</td>
        <td class="td-name">{{users.name}}</td>
        <td class="td-address">{{users.address}}</td>
        <td class="tdNum">{{users.id_titul}}</td>
    </tr>
</template>

<script>
export default {
    props: ['users']
}
</script>

<style>
    .tdNum {
        width: 3%;
    }
    .td-name {
        text-align: center;
    }
</style>