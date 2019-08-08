<template>
    <section>
        <result :id="1" :title="'Resultado 1'" :description="'Descripción del resultado 1'"/>
    </section>
</template>
<script>
import Result from "../components/ui/Result"
export default {
    name: "documentation",
    components: {
        Result
    }
}
</script>