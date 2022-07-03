package com.wehanju.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.wehanju.dto.Dept;

public interface DeptMapper {
	
//	public String getDeptNameByDeptno(int departmentId);
	
	public Dept getDeptByDeptno(int departmentId);
	
	public List<Dept> getAllDepts();
	
	public void insertDept(Dept department);
	
//	public void insertDepts(List<Dept> deptlist);
	
	public void updateDept(@Param("departmentId") int departmentId, @Param("departmentName") String departmentName, @Param("departmentAvailable") Byte departmentAvailable);
	
//	public void updateDeptByDeptnoAndDname(Map data);
	
	public void deleteDeptByName(String departmentName);
	
//	public void deleteDeptByDeptId(int departmentId);
	
	public void deleteDeptByDeptId(int departmentId);
}
