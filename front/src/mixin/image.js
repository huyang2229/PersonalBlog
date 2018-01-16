import { mapGetters } from '../store/vuex'

export default {
  computed: {
    ...mapGetters([
      'option',
      'siteInfo',
      'supportWebp'
    ]),
    logoUrl() {
      return this.getValidImageUrl(this.option ? this.option.logoUrl || '' : 'https://owyxyx729.bkt.clouddn.com/my.png')
    },
    sidebarUrl() {
      return this.getValidImageUrl(this.option ? this.option.sidebarImageUrl || '' : '')
    }
  },
  methods: {
    getValidImageUrl(url) {
      if (!this.supportWebp) return url.replace(/.webp$/, '.png').replace('/webp', '')
      console.log(url)
      return url
    }
  }
}
