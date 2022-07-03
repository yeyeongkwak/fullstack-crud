package com.wehanju.service;

import java.util.List;

import com.wehanju.dto.Dept;


public interface DeptService {
	
	public Dept getDeptByDeptno(int departmentId);
	
//	public String getDeptNameByDeptno(int departmentId);
	
	public List<Dept> getAllDepts();
	
	public void insertDept(Dept department);
	
//	public void insertDepts(List<Dept> deptlist);
	
	public void updateDept(int departmentId, String departmentName, Byte departmentAvailable);
	
	public void deleteDeptByName(String departmentName);
	
	public void deleteDeptByDeptId(int departmentId);

	
}
