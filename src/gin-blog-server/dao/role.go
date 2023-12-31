package dao

import (
	"gin-blog/model"
	"gin-blog/model/req"
	"gin-blog/model/resp"

	"github.com/gin-gonic/gin"
)

type Role struct{}

// 根据 [userInfoId] 获取 [角色标签列表]
func (*Role) GetLabelsByUserInfoId(userInfoId int, ctx *gin.Context) (labels []string) {
	DB.WithContext(ctx.Request.Context()).Table("role r, user_role ur").
		Where("r.id = ur.role_id AND ur.user_id = ?", userInfoId).
		Pluck("label", &labels) // 将单列查询为切片
	return
}

// 根据 [角色id] 获取 [角色标签列表]
func (*Role) GetLabelsByRoleIds(ids []int, ctx *gin.Context) (labels []string) {
	DB.WithContext(ctx.Request.Context()).Model(model.Role{}).Where("id in ?", ids).Pluck("label", &labels)
	return
}

// 获取角色列表[非树形]
func (*Role) GetList(req req.PageQuery, ctx *gin.Context) (list []resp.RoleVo, total int64) {
	list = make([]resp.RoleVo, 0)
	db := DB.WithContext(ctx.Request.Context()).Table("role")
	// 查询条件
	if req.Keyword != "" {
		db = db.Where("name like ?", "%"+req.Keyword+"%")
	}
	db.Count(&total).
		Limit(req.PageSize).Offset((req.PageNum - 1) * req.PageSize).
		Select("id, name, label, created_at, is_disable").
		Find(&list)
	return list, total
}

// 获取角色选项
func (*Role) GetOption(ctx *gin.Context) []resp.OptionVo {
	list := make([]resp.OptionVo, 0)
	DB.WithContext(ctx.Request.Context()).Model(&model.Role{}).Select("id", "name").Find(&list)
	return list
}

// ! 更新 role 时注意维护 casbin_rule 中的数据
// func (r *Role) SaveOrUpdate(newRole *model.Role) {
// 	if newRole.ID == 0 {
// 		Create(newRole)
// 		return
// 	}

// 	oldRole := GetOne(model.Role{}, "id = ?", newRole.ID)
// 	// 关联更新 casbin_rule 表中的 v0 (role_label)
// 	DB.WithContext(ctx.Request.Context()).Model(&gormadapter.CasbinRule{}).
// 		Where("v0 = ?", oldRole.Label).Update("v0", newRole.Label)
// 	Update(newRole)
// }

// 根据 [角色id] 查询出 [资源id列表]
func (*Role) GetResourcesByRoldId(roleId int, ctx *gin.Context) (resourecIds []int) {
	DB.WithContext(ctx.Request.Context()).Model(&model.RoleResource{}).
		Where("role_id = ?", roleId).
		Pluck("resource_id", &resourecIds)
	return
}

// 根据 [角色id] 查询出 [目录id列表]
func (*Role) GetMenusByRoleId(roleId int, ctx *gin.Context) (menuIds []int) {
	DB.WithContext(ctx.Request.Context()).Model(&model.RoleMenu{}).
		Where("role_id = ?", roleId).
		Pluck("menu_id", &menuIds)
	return
}
